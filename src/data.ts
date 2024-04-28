import sharedImages from '@utility/sharedImages';
import {CATEGORY} from './types';

export default {
  services: [
    {
      id: 1,
      provider: 'Kylee Danford',
      serviceType: 'House Cleaning',
      rating: 4.5,
      number_of_reviews: 2300,
      category: CATEGORY.CLEANING,
      isBookMarked: false,
    },
    {
      id: 2,
      provider: 'John Doe',
      serviceType: 'Plumbing',
      rating: 2.5,
      number_of_reviews: 100,
      category: CATEGORY.PLUMBING,
      isBookMarked: false,
    },
    {
      id: 3,
      provider: 'Kylee Danford',
      serviceType: 'House Cleaning',
      rating: 4.5,
      number_of_reviews: 2300,
      category: CATEGORY.CLEANING,
      isBookMarked: false,
    },
    {
      id: 4,
      provider: 'James Miller',
      serviceType: 'House Moving',
      rating: 4.5,
      number_of_reviews: 2300,
      category: CATEGORY.MOVERS,
      isBookMarked: false,
    },
    {
      id: 5,
      provider: 'Kayla Durrant',
      serviceType: 'House Painting',
      rating: 4.5,
      number_of_reviews: 2300,
      category: CATEGORY.PAINTING,
      isBookMarked: false,
    },
    {
      id: 6,
      provider: 'Jeniifer Danfo',
      serviceType: 'Repairs',
      rating: 4.5,
      number_of_reviews: 1900,
      category: CATEGORY.REPAIRING,
      isBookMarked: false,
    },
    {
      id: 7,
      provider: 'Kylee Jackson',
      serviceType: 'House Appliances',
      rating: 2.5,
      number_of_reviews: 200,
      category: CATEGORY.APPLIANCE,
      isBookMarked: false,
    },
    {
      id: 8,
      provider: 'Anna Danford',
      serviceType: 'House Cleaning',
      rating: 3.5,
      number_of_reviews: 1000,
      category: CATEGORY.CLEANING,
      isBookMarked: false,
    },
    {
      id: 9,
      provider: 'Joshua Danford',
      serviceType: 'Cleaning',
      rating: 4,
      number_of_reviews: 2800,
      category: CATEGORY.LAUNDRY,
      isBookMarked: false,
    },
    {
      id: 10,
      provider: 'Musa Adkins',
      serviceType: 'House applicances',
      rating: 4.5,
      number_of_reviews: 2500,
      category: CATEGORY.APPLIANCE,
      isBookMarked: false,
    },
    {
      id: 11,
      provider: 'Jeremy Hover',
      serviceType: 'House Cleaning',
      rating: 2,
      number_of_reviews: 20,
      category: CATEGORY.CLEANING,
      isBookMarked: false,
    },
  ],
  categories: [
    {
      name: 'Cleaning',
      icon: sharedImages.icons.broom,
    },
    {
      name: 'Repairing',
      icon: sharedImages.icons.tools,
    },
    {
      name: 'Painting',
      icon: sharedImages.icons.roller,
    },
    {
      name: 'Laundry',
      icon: sharedImages.icons.washer,
    },
    {
      name: 'Appliance',
      icon: sharedImages.icons.spanner,
    },
    {
      name: 'Plumbing',
      icon: sharedImages.icons.tap,
    },
    {
      name: 'Movers',
      icon: sharedImages.icons.truck,
    },
    {
      name: "Men's Cloth",
      icon: sharedImages.icons.sciccors,
    },
  ],
};
