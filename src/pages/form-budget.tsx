import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import { z } from "zod"
import './company-form.css'
import { CompanyForm } from "./company-form"
import { ClientForm } from "./client-form"

const request = z.object({
  company: z.object({
    name: z.string().nonempty(),
    id: z.string().nonempty(),
    email: z.string().nonempty(),
    fone: z.string().nonempty(),
    address: z.string().nonempty()
  }),
  client: z.object({
    name: z.string().nonempty(),
    id: z.string().nonempty(),
    email: z.string().nonempty(),
    fone: z.string().nonempty(),
    address: z.string().nonempty()
  })
})

export type Request = z.infer<typeof request>

export function FormBudget(): JSX.Element {
  const { register, formState: { errors }, handleSubmit } = useForm<Request>({
    resolver: zodResolver(request)
  })

  const onSubmit = async (data: Request) => {
    console.log(data)
    axios.post('https://budget-io.onrender.com/', {
      company: data.company,
      client: data.client,
      products: [
        {
          code: "1",
          description: "Software customizado",
          quant: 1,
          price: 5000,
          totalPrice: 5000
        }
      ]
    }).then(function (response) {
      console.log(response);
      alert(response.data.message)
      const url = `https://budget-io.onrender.com/${response.data.pdfId}`
      console.log(url)
      window.open(url, "_blank")
    })
      .catch(function (error) {
        alert('Erro ao gerar o pdf')
        console.error(error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CompanyForm errors={errors} register={register} />
        <ClientForm errors={errors} register={register} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
