import {
  BadRequestException,
  Controller,
  Get,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { Distance, Gender, TimesParameters } from './TimesParameters';
import { TimesRequest } from './TimesRequest';
import { TimesResponse } from './TimesResponse';

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
    description: 'A list of times and a total amount of times available',
    type: TimesResponse,
    isArray: true,
  })
  async getPowerOfTen(
    @Query() { limit = 10, skip = 0, sortField, sortOrder }: TimesRequest,
    @Param() { gender, distance }: TimesParameters,
  ): Promise<TimesResponse> {
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
