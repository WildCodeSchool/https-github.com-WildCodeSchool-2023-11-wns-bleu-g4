import express from "express";
import { Field, InputType, Int, ObjectType } from "type-graphql";
import Product from "./entities/Product";
import { User } from "./entities/User";

export interface ContextType {
	req: express.Request
	res: express.Response
	currentUser?: User
}

@InputType()
export class ObjectId {
	@Field(() => Int)
	id!: number;
}

@InputType()
export class UserId {
	@Field(() => Int)
	id!: number;
}

@InputType()
export class AgencyId {
	@Field(() => Int)
	id!: number;
}
@InputType()
export class ProductId {
	@Field(() => Int)
	id!: number;
}

@InputType()
export class BookingId {
	@Field(() => Int)
	id!: number;
}

@InputType()
export class CategoryId {
	@Field(() => Int)
	id!: number;
}

@InputType()
export class CharacteristicID {
	@Field(() => Int)
	id!: number;
}

@InputType()
export class ParentCategoryId {
	@Field(() => Int)
	id!: number;
	static BIKES: any;
	static ACCESSORIES: any;
}

@InputType()
export class BrandId {
	@Field(() => Int)
	id!: number;
}
@ObjectType()
export class ProductList {
	@Field(() => Int)
	total!: number;

	@Field(() => [Product])
	products!: Product[];
}