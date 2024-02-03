import { NotFoundException, ConflictException } from '@nestjs/common';

export async function handlePrismaError<T>(promise: Promise<T>): Promise<T> {
  try {
    return await promise;
  } catch (error) {
    if (error.code === 'P2025') {
      throw new NotFoundException(error.message);
    } else if (error.code === 'P2002') {
      throw new ConflictException(error.message);
    } else {
      throw new Error(error.message);
    }
  }
}