import { ApiProperty } from '@nestjs/swagger';

export class IndividualTime {
  @ApiProperty({ name: 'rank', description: 'Ranking of time', example: 2 })
  rank: number;

  @ApiProperty({
    name: 'chipTime',
    description: 'The chip calculated run duration (seconds)',
    type: Number,
    example: 9698,
  })
  chipTime: number;

  @ApiProperty({
    name: 'gunTime',
    description: 'The starting gun run duration (seconds)',
    type: Number,
    example: 9812,
    required: false,
  })
  gunTime?: number;

  @ApiProperty({
    name: 'pbTime',
    description: 'The runners personal best time (seconds)',
    type: Number,
    example: 9812,
    required: false,
  })
  pbTime?: number;

  @ApiProperty({
    name: 'isPB',
    description: 'Was this time a personal best?',
    type: Number,
    example: true,
  })
  isPB: boolean;

  @ApiProperty({
    name: 'name',
    description: 'Full name of the runner',
    type: String,
    example: 'Tracy Barlow',
  })
  name: string;

  @ApiProperty({
    name: 'grading',
    description: 'Age grading of the runner',
    type: String,
    example: 'V40',
    required: false,
  })
  grading?: string;

  @ApiProperty({
    name: 'coach',
    description: 'Full name of the coach',
    type: String,
    example: 'Tom Craggs',
    required: false,
  })
  coach?: string;

  @ApiProperty({
    name: 'club',
    description: 'Name of the running club',
    type: String,
    example: 'Clapham Chasers',
    required: false,
  })
  club?: string;

  @ApiProperty({
    name: 'venue',
    description: 'Where was the time set?',
    type: String,
    example: 'Manchester',
  })
  venue: string;

  @ApiProperty({
    name: 'date',
    description: 'When was the time set (epoch seconds)',
    type: Number,
    example: 1713049200,
  })
  date: number;
}
