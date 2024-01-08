'use client'
import styles from './page.module.scss'
import variables from './variables.module.scss';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Home() {
  const router = useRouter()

    useEffect(() => {
      router.push('/landingpage')
    }, [])
    return < ></>;

}
