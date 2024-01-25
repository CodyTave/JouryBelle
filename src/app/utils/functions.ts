import { useRouter } from "next/navigation";

type ContactInfo = {
  fullName: string;
  tel: string;
  email: string;
  message: string;
};

export function MessageGenerator(contactInfo: ContactInfo): string {
  let message = "Bonjour, ";

  if (contactInfo.fullName) {
    message += `%0aje m'appelle ${contactInfo.fullName}.`;
  }

  if (contactInfo.tel) {
    message += ` %0aavec numéro de téléphone : ${contactInfo.tel},`;
  }

  if (contactInfo.email) {
    message += ` %0aet d'Email : ${contactInfo.email}.`;
  }

  if (contactInfo.message) {
    message += `%0a${contactInfo.message}`;
  } else {
    message += "%0aJe souhaite vous contacter.";
  }
  return message;
}
