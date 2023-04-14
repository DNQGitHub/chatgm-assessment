-- CreateTable
CREATE TABLE "TrackingEvent" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "action" TEXT NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "TrackingEvent_pkey" PRIMARY KEY ("id")
);
