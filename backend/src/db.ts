import { DataSource } from "typeorm"
import { User } from "./entities/User"
import env from "./env"
import Review from "./entities/Review"
import Product from "./entities/Product"
import Category from "./entities/Category"
const { DB_USER, DB_PASS, DB_NAME, DB_PORT, DB_HOST } = env

export const db = new DataSource({
	type: "postgres",
	host: DB_HOST,
	port: DB_PORT,
	username: DB_USER,
	password: DB_PASS,
	database: DB_NAME,
	entities: [User, Review, Product, Category],
	synchronize: true,
})
