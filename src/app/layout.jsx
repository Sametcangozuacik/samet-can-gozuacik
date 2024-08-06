import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import styles from "./global.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samet Can Gözüaçık | Yazılım Geliştirici",
   description: "Merhaba, ben Ankara'da Freelance Web Developer olarak hizmet veriyorum. Uzmanlık alanlarım başlıca Web Tasarım ve Web Yazılım'dır. HTML5, CSS3, ve JavaScript teknolojileri yanı sıra, modern framework'ler olan Vue.js, React.js, Next.js, ve Quasar'ı kullanarak front-end geliştirme yapmaktayım. Ayrıca, PHP ve MySQL teknolojileri ile back-end programlama konusunda da deneyimliyim. Projelerinizde, kullanıcı dostu, mobil uyumlu ve performansı yüksek web siteleri tasarlayarak markanızın dijital dünyadaki varlığını güçlendirmeyi amaçlıyoeum",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "Samet Can",
      content: "Samet Can Gözüaçık | Yazılım Geliştirici , Freelance Web Developer , Samet Can Gözüaçık , Gazi Üniversitesi, Web Developer, Web Tasarım, Web Yazılım, HTML5, CSS3, JavaScript, Vue.js, React.js, Next.js, Quasar, PHP, MySQL", 
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.root}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta charSet={metadata.meta.charset} />
        <meta name="keywords" content={metadata.meta.name.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
