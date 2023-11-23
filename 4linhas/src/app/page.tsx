import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='border-2 border-gray-200 rounded p-12'>
      <div className='text-4xl text-emerald-600 p-12'>4Linhas</div>
      <div className='flex flex-col text-black space-y-2'>
        <div className='flex flex-col'>
        Email
        <input type="email" placeholder='Email' className='border'/>

        </div>
        <div className='flex flex-col'>
        Senha
        <input type="password" placeholder='Senha'  className='border' />
        <a href="google.com" className='text-xs mt-1'>Esqueci a senha</a>
        </div>
        </div>
      <div className='flex flex-col mt-4'>
        <button className='p-2 border bg-white text-black mb-4'>Login</button>
        
        <button className='border bg-emerald-600 text-white p-2'>Cadastre-se</button>
      </div>
      <div className='text-black p-2 mt-0'>
        <a href="/" className='text-xs p-2'>Ajuda</a>
        <a href="/" className='text-xs p-2'>Privacidade</a>
        <a href="/" className='text-xs p-2'>Termos de uso</a>
      </div>
      </div>

    </main>
  )
}
