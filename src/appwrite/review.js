import { Client, Databases, Account, ID, Query, Permission, Role } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  databases;
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.account = new Account(this.client);
  }

  async getCurrentUserId() {
    try {
      const user = await this.account.get();
      return user.$id;
    } catch {
      throw new Error("Please log in to submit a review");
    }
  }


  async addReview(movieId, reviewText, rating) {
    try {
      const userId = await this.getCurrentUserId();
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          movieId,
          userId,
          reviewText,
          rating:parseInt(rating),
          createdAt: new Date().toISOString(),
        },
      );
    } catch (error) {
      console.error("Error adding review:", error);
      switch (error.code) {
        case 401:
          throw new Error("Please log in to submit a review");
        case 403:
          throw new Error("You don't have permission to submit reviews");
        default:
          throw new Error("Failed to submit review. Please try again later");
      }
    }
  }

  async getReviews(movieId) {
    try {
      const response = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [
          Query.equal('movieId', movieId),
          Query.orderDesc('createdAt')
        ]
      );
      return response.documents;
    } catch (error) {
      console.error("Error fetching reviews:", error);
      throw new Error("Failed to load reviews. Please try again later.");
    }
  }
}

const service = new Service();
export default service;
