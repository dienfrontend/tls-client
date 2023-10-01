import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  localType: z.string(),
  contract: z.string(),
  phone: z.string(),
  dateAssign: z.string(),
  agent: z.string(),
  saleBy: z.string(),
  saleDate: z.string(),
  totalCall: z.string(),
  result: z.string(),
  dateResult: z.string(),
  dateEnd: z.string(),
  note: z.string(),
})

export type Task = z.infer<typeof taskSchema>
