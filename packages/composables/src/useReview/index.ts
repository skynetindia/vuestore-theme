import {
  Context,
  useReviewFactory,
  UseReviewFactoryParams,
} from '@vue-storefront/core';
import type { Review } from '@vue-storefront/myshop-api';
import type {
  UseReviewSearchParams as SearchParams,
  UseReviewAddParams as AddParams,
} from '../types';
import {ReviewAttributePropTypes} from "@vue-storefront/myshop-api/lib/PropTypes/ReviewPropTypes";

const params: UseReviewFactoryParams<Review, SearchParams, AddParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchReviews: async (context: Context, params) => {
    console.log('Mocked: useReview.searchReviews');
    return {
      id: "",
      type: "",
      attributes: {
        'review.id': "",
        'review.refid': "",
        'review.domain': "",
        'review.response': "",
        'review.comment':"",
        'review.rating': 0,
        'review.status': 1,
        'review.name': "",
        'review.ctime': "",
      }
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addReview: async (context: Context, params) => {
    console.log('Mocked: useReview.addReview');
    return {
      id: "",
      type: "",
      attributes: {
        'review.id': "",
        'review.refid': "",
        'review.domain': "",
        'review.response': "",
        'review.comment':"",
        'review.rating': 0,
        'review.status': 1,
        'review.name': "",
        'review.ctime': "",
      }
    };
  },
};

export const useReview = useReviewFactory<Review, SearchParams, AddParams>(
  params
);
