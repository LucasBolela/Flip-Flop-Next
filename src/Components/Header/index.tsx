import Link from 'next/link';
import style from './styles.module.scss';
import { useRouter } from 'next/router';

export function Header() {
    const {asPath} = useRouter();
    return (
        <header className={style.container}>
            <div className={style.content}>
                <img src="/favicon.png" alt="Dev News" />
                <nav>
                    <Link href="/"> 
                        <a className={asPath == "/" ? style.active : ''}>Home</a>
                    </Link>
                    <Link href="/posts">
                        <a className={asPath == "/posts" ? style.active : ''}>Posts</a>
                    </Link>
                    <Link href="/bitcoin">
                        <a className={asPath == "/bitcoin" ? style.active : ''}>Bitcoin</a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}