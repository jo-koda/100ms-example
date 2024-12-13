import Form from './_sections/form';
import { getTranslations } from 'next-intl/server';
import Header from './_sections/header';
import Footer from './_sections/footer';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'SignIn' });

  return {
    title: t('signIn'),
  };
}

export default async function SignUpPage() {
  return (
    <div className="flex h-screen">
      <div className="m-auto flex flex-col items-center gap-8">
        <Header />
        <div className="flex flex-col items-center gap-4">
          <Form />
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}
