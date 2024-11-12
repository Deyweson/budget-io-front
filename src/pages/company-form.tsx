import { FieldErrors, UseFormRegister } from "react-hook-form"
import { Request } from "./form-budget"

interface Props {
  register: UseFormRegister<Request>
  errors: FieldErrors<Request>
}

export function CompanyForm({ register, errors }: Props): JSX.Element {
  return (
    <div className="info-form">
      <div>
        <label>Nome da empresa:</label>
        <input {...register('company.name')} type="text" style={{ borderColor: errors.company?.name ? 'red' : '' }} />
      </div>
      <div>
        <label>CNPJ/CPF:</label>
        <input {...register('company.id')} type="text" style={{ borderColor: errors.company?.id ? 'red' : '' }} />
      </div>
      <div>
        <label>E-mail:</label>
        <input {...register('company.email')} type="text" style={{ borderColor: errors.company?.email ? 'red' : '' }} />
      </div>
      <div>
        <label>Telefone:</label>
        <input {...register('company.fone')} type="text" style={{ borderColor: errors.company?.fone ? 'red' : '' }} />
      </div>
      <div>
        <label>Endereço:</label>
        <input {...register('company.address')} type="text" style={{ borderColor: errors.company?.address ? 'red' : '' }} />
      </div>
    </div>
  )
}
