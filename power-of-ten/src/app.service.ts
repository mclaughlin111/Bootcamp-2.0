import { Injectable } from '@nestjs/common';
import { TimeRow } from './types';
import { Distance, Gender } from './TimesParameters';
import { readFile } from 'fs/promises';
import { SortField, SortOrder } from './TimesRequest';
import orderby from 'lodash.orderby';
import { TimesResponse } from './TimesResponse';

@Injectable()
export class AppService {
  private async readJsonFile(path: string) {
    const file = await readFile(path, 'utf8');
    return JSON.parse(file) as TimeRow[];
  }

  async getPowerOfTen(
    gender: Gender,
    distance: Distance,
    limit: number,
    skip: number,
    sortField?: SortField,
    sortOrder?: SortOrder,
  ): Promise<TimesResponse> {
    const allTimes = await this.readJsonFile(
      `./src/data/${distance}-${gender}.json`,
    );

    const orderedTimes =
      sortField !== undefined
        ? orderby(allTimes, [sortField], [sortOrder!])
        : allTimes;
    return new TimesResponse(
      orderedTimes.slice(skip, limit + skip),
      allTimes.length,
    );
  }
}
