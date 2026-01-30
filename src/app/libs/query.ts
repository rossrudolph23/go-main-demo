import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL??'');

export async function getFleetMakeModel() {    
    return await sql`SELECT make, model FROM autos` ;
}

export async function getFleet() {    
    return await sql`SELECT *FROM autos` ;
}

export async function getFleetByMake(make: string) {    
    return await sql`SELECT make, model FROM autos WHERE make = ${make}` ;
}