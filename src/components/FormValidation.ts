import { z } from "zod";

export const sendMoneySchema = z.object({
  recipientName: z.string().min(1, "Le nom du destinataire est requis"),
  recipientPhone: z.string().min(10, "Numéro de téléphone invalide"),
  sourceAccount: z.string().min(1, "Le compte source est requis"),
  recipientNetwork: z.string().min(1, "Le réseau du destinataire est requis"),
  amount: z.number().positive("Le montant doit être positif"),
});

export const exchangeSchema = z.object({
  fromCurrency: z.string().min(1, "La devise source est requise"),
  toCurrency: z.string().min(1, "La devise cible est requise"),
  amount: z.number().positive("Le montant doit être positif"),
});

export const addMoneySchema = z.object({
  source: z.string().min(1, "La source est requise"),
  amount: z.number().positive("Le montant doit être positif"),
  targetAccount: z.string().min(1, "Le compte cible est requis"),
});

export const statementSchema = z.object({
  startDate: z.string().min(1, "La date de début est requise"),
  endDate: z.string().min(1, "La date de fin est requise"),
});

export const receiveMoneySchema = z.object({
  recipientType: z.enum(["contact", "number"]),
  selectedContact: z.string().optional(),
  recipientNumber: z.string().optional(),
  amount: z.number().positive("Le montant doit être positif"),
});

export const signUpSchema = z.object({
  firstName: z.string().min(1, "Le prénom est requis"),
  lastName: z.string().min(1, "Le nom est requis"),
  dateOfBirth: z.string().min(1, "La date de naissance est requise"),
  phoneNumber: z.string().min(10, "Numéro de téléphone invalide"),
});

export const loginSchema = z.object({
  phoneNumber: z.string().min(10, "Numéro de téléphone invalide"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});