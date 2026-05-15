import type { Metadata } from "next";
import ReviewsClient from "./ReviewsClient";

export const metadata: Metadata = {
  title: "Reviews | Clipping Gents Salon Sharjah",
  description:
    "Read what our clients say about Clipping Gents Salon. Rated 4.9 stars on Google with 36 reviews.",
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}
