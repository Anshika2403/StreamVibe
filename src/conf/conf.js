const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    traktClientId:String(import.meta.env.VITE_TRAKT_CLIENT_ID),
    omdbApiKey:String(import.meta.env.VITE_OMDB_API_KEY),
}

export default config
