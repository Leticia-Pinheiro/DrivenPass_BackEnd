-- CreateTable
CREATE TABLE "cards" (
    "id" SERIAL NOT NULL,
    "userId" DECIMAL NOT NULL,
    "cardName" VARCHAR(120) NOT NULL,
    "number" VARCHAR(100) NOT NULL,
    "printedName" VARCHAR(120) NOT NULL,
    "securityCode" VARCHAR(3) NOT NULL,
    "expirationDate" VARCHAR(10) NOT NULL,
    "password" VARCHAR(120) NOT NULL,
    "isVirtual" BOOLEAN NOT NULL,
    "type" VARCHAR(120) NOT NULL,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credentials" (
    "id" SERIAL NOT NULL,
    "userId" DECIMAL NOT NULL,
    "credentialName" VARCHAR(120) NOT NULL,
    "url" VARCHAR(1000) NOT NULL,
    "userName" VARCHAR(120) NOT NULL,
    "password" VARCHAR(120) NOT NULL,

    CONSTRAINT "credentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notes" (
    "id" SERIAL NOT NULL,
    "userId" DECIMAL NOT NULL,
    "title" VARCHAR(120) NOT NULL,
    "note" VARCHAR(1000) NOT NULL,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(120) NOT NULL,
    "password" VARCHAR(120) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
