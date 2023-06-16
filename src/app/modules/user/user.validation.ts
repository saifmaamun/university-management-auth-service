import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role must be provided',
    }),
    password: z.string().optional(),
  }),
});
// await createZodUserSchema.parseAsync(req);

export const UserValidation = {
  createUserZodSchema,
};
