-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cryptoWalletId" TEXT,
    "UserWalletId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserWallet" (
    "id" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserWallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CryptoWallet" (
    "id" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "CryptoWallet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserWallet_userId_key" ON "UserWallet"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CryptoWallet_userId_key" ON "CryptoWallet"("userId");

-- AddForeignKey
ALTER TABLE "UserWallet" ADD CONSTRAINT "UserWallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CryptoWallet" ADD CONSTRAINT "CryptoWallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
