-- CreateTable
CREATE TABLE "confirmationCode" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "confirmationCode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "confirmationCode_email_key" ON "confirmationCode"("email");

-- CreateIndex
CREATE INDEX "confirmationCode_email_idx" ON "confirmationCode"("email");
