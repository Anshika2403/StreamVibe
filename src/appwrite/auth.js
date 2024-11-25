import config from "../conf/conf";
import { Client, Account, ID, OAuthProvider } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return this.login({ email, password });
      }
      return userAccount;
    } catch (error) {
      console.error("Error creating account:", error.message);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      try {
        const currentSession = await this.account.getSession("current");
        if (currentSession) {
          await this.account.deleteSession("current");
        }
      } catch (error) {
        console.log("No active session found");
      }

      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return session;
    } catch (error) {
      console.error("Error during login:", error.message);

      if (error.code === 401) {
        throw new Error("Invalid email or password");
      }
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Error getting current user:", error.message);
      return null;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
      return true;
    } catch (error) {
      console.error("Error during logout:", error.message);
      throw error;
    }
  }

  async checkSession() {
    try {
      const session = await this.account.getSession("current");
      return session;
    } catch (error) {
      return null;
    }
  }
}

const authService = new AuthService();
export default authService;
