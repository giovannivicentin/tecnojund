import Link from 'next/link'
import Image from 'next/image'

const WhatsAppButton = () => {
  return (
    <div className="fixed md:bottom-7 md:right-14 bottom-4 right-6 z-10">
      <Link
        href="https://wa.me/+5511971374104"
        className="hover:brightness-90 md:w-14 md:h-14 w-12 h-12 rounded-full text-white shadow-lg transition animate-fade-up animate-duration-1000 animate-ease-in flex items-center justify-center"
      >
        <Image src="/whatsapp.svg" alt="WhatsApp" fill />
      </Link>
    </div>
  )
}

export default WhatsAppButton
