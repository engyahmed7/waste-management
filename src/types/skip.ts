export interface Skip {
  id: string;
  name: string;
  size: string;
  price_before_vat: number;
  hire_period_days: string;
  image_url?: string;
  description?: string;
  allowed_on_road?: boolean;

  dimensions?: {
    length: string;
    width: string;
    height: string;
  };
}

export interface SkipResponse {
  skips: Skip[];
  location: {
    postcode: string;
    area: string;
  };
}
