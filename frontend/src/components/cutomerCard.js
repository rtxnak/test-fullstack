import Image from "next/image";
import Link from "next/link";

const CustomerCard = ({ customer }) => {

  const statusIconHandler = () => {
    if (customer.status === "Ativo") {
      return "./greenIcon.svg";
    }
    if (customer.status === "Inativo") {
      return "./redIcon.svg";
    }
    if (customer.status === "Aguardando ativação") {
      return "./yellowIcon.svg";
    } else {
      return "./greyIcon.svg";
    }
  }

  return (
    <div className="lg:p-4 border rounded shadow-md lg:m-2 my-2 w-full md:flex md:justify-between text-xs lg:text-base text-center md:text-start">
      <div className="md:w-fit">
        <div className="m-2">
          <strong className="">Nome:</strong> {customer.name}
        </div>
        <div className="m-2">
          <strong className="">Email:</strong> {customer.email}
        </div>
      </div>
      <div className="md:w-fit">
        <div className="m-2">
          <strong className="">CPF:</strong> {customer.cpf}
        </div>
        <div>
          <strong className="m-2">Telefone:</strong>{customer.phoneNumber}
        </div>
      </div>
      <div className="flex justify-center items-center lg:m-2 md:w-1/5 md:justify-start">
        <Image
          src={statusIconHandler()}
          width={10}
          height={10}
          className="mr-2 lg:w-4"
          layout="fixed"
          objectFit="contain"
          objectPosition="center"
          priority
          alt="redIcon" />
        {customer.status}
      </div>
      <div className="flex items-center justify-center m-2">
        <Link
          href={`/customer/${customer.id}`}
          className="hover:bg-orange-400 hover:text-white px-4 md:py-2 py-1 rounded md:mt-2 lg:mx-2 border border-orange-400 text-orange-400">
          Editar
        </Link>
      </div>
    </div>
  );
};

export default CustomerCard;
