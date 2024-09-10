import {
  BadRequestException,
  Controller,
  Get,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TimeRow } from './types';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { Distance, Gender, TimesParameters } from './TimesParameters';
import { TimesRequest } from './TimesRequest';
import { IndividualTime } from './IndividualTime';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/times/:gender/:distance')
  @ApiParam({
    name: 'gender',
    description: 'The gender of the race',
    enum: Gender,
  })
  @ApiParam({
    name: 'distance',
    description: 'The distance of the race',
    enum: Distance,
  })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'A list of times',
    example: [
      {
        rank: 22,
        chipTime: 9698,
        pbTime: 9042,
        isPB: false,
        name: 'Tracy Barlow',
        grading: 'V35',
        coach: 'Tom Craggs',
        club: 'Thames Valley',
        venue: 'Copenhagen, DEN',
        date: 1714863600,
      },
      {
        rank: 26,
        chipTime: 9812,
        pbTime: 9812,
        isPB: true,
        name: 'Anna Lawson',
        club: 'Clapham Chasers',
        venue: 'Manchester',
        date: 1713049200,
      },
    ] as TimeRow[],
    type: IndividualTime,
    isArray: true,
  })
  async getPowerOfTen(
    @Query() { limit = 10, skip = 0, sortField, sortOrder }: TimesRequest,
    @Param() { gender, distance }: TimesParameters,
  ): Promise<TimeRow[]> {
    if (sortOrder !== undefined && sortField === undefined) {
      throw new BadRequestException(
        'Cannot have a sort order without a sort field',
      );
    }
    return this.appService.getPowerOfTen(
      gender,
      distance,
      limit,
      skip,
      sortField,
      sortOrder,
    );
  }
}
