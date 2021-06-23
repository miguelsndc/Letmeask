import { useForm } from 'react-hook-form'
import IllustrationImg from '../../assets/images/illustration.svg'
import LogoImg from '../../assets/images/logo.svg'

import { Button } from '../../components/Button/'

import { PageAuth, MainContent } from '../../styles/pages/shared'

export function NewRoom() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  return (
    <PageAuth>
      <aside>
        <img
          src={IllustrationImg}
          alt='Ilustração simbolizando perguntas e respostas'
        />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <MainContent>
          <img src={LogoImg} alt='Letmeask' />
          <h2>Criar uma nova Sala</h2>
          <form onSubmit={handleSubmit(handleCreateRoom)}>
            <input
              type='text'
              placeholder='Nome da Sala'
              {...register('newRoom', { required: true })}
            />
            {errors.newRoom && <ErrorMsg>Digite o nome da sala</ErrorMsg>}
            <Button type='submit'>Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala já existente?{' '}
            <Link to='/'>Clique aqui</Link>{' '}
          </p>
        </MainContent>
      </main>
    </PageAuth>
  )
}
