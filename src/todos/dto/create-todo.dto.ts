import { IsString, IsBoolean, IsInt } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  isCompleted: boolean;

  @IsInt()
  order: number;
}
