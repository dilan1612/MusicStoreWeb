import {z} from 'zod';

export const instrumentSchema = z.object({
 type: z.string({required_error: 'Type is required'}),
 marca: z.string({required_error: 'Marca is required'}),
 color: z.string({required_error: 'Color is required'}),
    value: z.number({required_error: 'Value is required'}).int({message: 'Value must be an integer'}).positive({message: 'Value must be positive'}),
    imag: z.string({required_error: 'Image is required'}), 
});