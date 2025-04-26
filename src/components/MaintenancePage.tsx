import { useState, useEffect } from "react";
import { send } from "@emailjs/browser";

export function MaintenancePage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const maintenanceEndDate = new Date("2025-05-30T00:00:00");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +maintenanceEndDate - +new Date();

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (!email || !email.includes("@") || !email.includes(".")) {
        throw new Error("Por favor, insira um email válido.");
      }

      const subscribersJSON =
        localStorage.getItem("maintenance_subscribers") || "[]";
      const subscribers = JSON.parse(subscribersJSON);
      subscribers.push(email);
      localStorage.setItem(
        "maintenance_subscribers",
        JSON.stringify(subscribers)
      );

      const serviceID = import.meta.env.VITE_APP_SERVICE_ID;
      const templateID = import.meta.env.VITE_APP_TEMPLATE_ID;
      const publickKey = import.meta.env.VITE_APP_PUBLIC_KEY;

      if (!serviceID || !templateID || !publickKey) {
        throw new Error("Variaveis do sistema incorretas!");
      }
      await send(
        serviceID,
        templateID,
        {
          user_email: email,
        },
        publickKey
      );

      setIsSubscribed(true);
      setEmail("");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Ocorreu um erro inesperado."
      );
      console.error("Erro ao processar inscrição:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-tr from-black to-gray-900 text-white">
      <header className="container mx-auto max-w-4xl p-4 py-8">
        <div className="flex items-center">
          <span className="font-headline text-3xl font-semibold">Flávio</span>
          <span className="ml-1 font-headline text-3xl font-light text-blue-400">
            Araújo
          </span>
        </div>
      </header>

      <main className="container mx-auto flex max-w-4xl flex-grow flex-col items-center justify-center p-4 py-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="animate-pulse text-6xl text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>

          <h1 className="mb-6">
            <span className="block font-handwriting text-3xl">Estamos em</span>
            <span className="font-headline text-5xl font-semibold">
              Manutenção
            </span>
          </h1>

          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-blue-800"></div>

          <p className="mb-0 text-center text-xl text-gray-400">
            ⚡ TRANSFORMAÇÃO EM ANDAMENTO!
          </p>
          <p className="mb-8 text-center text-lg text-gray-400">
            Estou nos bastidores elevando meu portfólio a um novo patamar de
            excelência visual e funcional. Prepare-se para uma experiência
            completamente reimaginada, com navegação intuitiva e projetos
            apresentados como nunca antes. A contagem regressiva já começou!
          </p>

          <div className="mb-8 grid grid-cols-4 gap-4">
            <div className="rounded-lg bg-blue-900/30 p-4">
              <div className="font-headline text-3xl font-bold">
                {countdown.days}
              </div>
              <div className="text-xs text-gray-400">DIAS</div>
            </div>
            <div className="rounded-lg bg-blue-900/30 p-4">
              <div className="font-headline text-3xl font-bold">
                {countdown.hours}
              </div>
              <div className="text-xs text-gray-400">HORAS</div>
            </div>
            <div className="rounded-lg bg-blue-900/30 p-4">
              <div className="font-headline text-3xl font-bold">
                {countdown.minutes}
              </div>
              <div className="text-xs text-gray-400">MINUTOS</div>
            </div>
            <div className="rounded-lg bg-blue-900/30 p-4">
              <div className="font-headline text-3xl font-bold">
                {countdown.seconds}
              </div>
              <div className="text-xs text-gray-400">SEGUNDOS</div>
            </div>
          </div>

          <div className="mb-8 rounded-lg bg-blue-800/20 p-6">
            <div className="mb-4 flex items-center">
              <div className="mr-2 text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="font-headline font-semibold">
                Quer ser notificado quando voltarmos?
              </h3>
            </div>

            {!isSubscribed ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 sm:flex-row"
              >
                <div className="flex-grow">
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor e-mail"
                      className="w-full rounded-lg border border-gray-700 bg-gray-900 py-2 pl-10 pr-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                      disabled={loading}
                    />
                  </div>
                  {error && (
                    <p className="mt-1 text-sm text-red-400">{error}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="button flex items-center justify-center gap-2 bg-blue-600 px-6 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                  ) : null}
                  Notifique-me
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            ) : (
              <div className="py-2 text-center text-green-400">
                Obrigado! Entraremos em contato quando estivermos online
                novamente.
              </div>
            )}
          </div>

          <div>
            <a
              href="mailto:flaviolopes1027@gmail.com"
              className="inline-block font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
              Entre em contato se precisar de ajuda
            </a>
          </div>
        </div>
      </main>
      <footer className="container mx-auto max-w-4xl p-4 text-sm text-gray-500">
        <p className="text-center">
          &copy; {new Date().getFullYear()} &middot; Flávio Araújo &middot;
          Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
