import mongoose from 'mongoose'

interface CachedConnection {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

const cached = (global.mongoose ?? {
  conn: null,
  promise: null,
}) as CachedConnection

export const connectToDatabase = async (
  MONGODB_URI = process.env.MONGODB_URI
) => {
  if (cached.conn) return cached.conn

  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing')

  cached.promise ??= mongoose.connect(MONGODB_URI)

  cached.conn = await cached.promise

  return cached.conn
}
