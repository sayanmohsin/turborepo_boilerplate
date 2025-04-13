import { z } from 'zod';
export declare const envSchema: z.ZodObject<{
    PORT: z.ZodDefault<z.ZodNumber>;
    DATABASE_URL: z.ZodString;
    NODE_ENV: z.ZodDefault<z.ZodEnum<["development", "production", "test"]>>;
}, "strip", z.ZodTypeAny, {
    PORT: number;
    DATABASE_URL: string;
    NODE_ENV: "development" | "production" | "test";
}, {
    DATABASE_URL: string;
    PORT?: number | undefined;
    NODE_ENV?: "development" | "production" | "test" | undefined;
}>;
export type EnvConfig = Required<z.infer<typeof envSchema>>;
export declare function validateEnv(config: Record<string, unknown>): EnvConfig;
