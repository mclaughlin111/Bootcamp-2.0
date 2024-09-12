import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsIn, IsNumber, IsOptional } from 'class-validator';

export enum SortField {
  Rank = 'rank',
  ChipTime = 'chipTime',
  Name = 'name',
  Coach = 'coach',
  Club = 'club',
  Venue = 'venue',
  Date = 'date',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export class TimesRequest {
  @ApiProperty({
    name: 'limit',
    description: 'Number of times to return',
    example: 10,
    required: false,
    enum: [10, 25, 50],
  })
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsOptional()
  @IsIn([10, 25, 50])
  limit: number;

  @ApiProperty({
    name: 'skip',
    description: 'Number of times to skip',
    example: 0,
    required: false,
  })
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsOptional()
  skip: number;

  @ApiProperty({
    name: 'sortField',
    description: 'Number of times to skip',
    example: 'rank',
    required: false,
    enum: SortField,
  })
  @IsEnum(SortField)
  @IsOptional()
  sortField?: SortField;

  @ApiProperty({
    name: 'sortOrder',
    description: 'Direction to sort by',
    example: 'asc',
    required: false,
    enum: SortOrder,
  })
  @IsEnum(SortOrder)
  @IsOptional()
  sortOrder?: SortOrder;
}
