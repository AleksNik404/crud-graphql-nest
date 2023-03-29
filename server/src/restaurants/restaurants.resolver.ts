import { Args, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from 'src/restaurants/restaurants.model';

@Resolver()
export class RestaurantResolver {
  @Query(() => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: string): Restaurant[] {
    return [];
  }
}
