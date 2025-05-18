export function WikiPage() {
  return (
    <div className="w-full grid-cols-4 grid-rows-2 grid gap-3 pr-2 [&>div]:hover:border-primary/50 [&>div]:transition-colors">
      <div className="col-span-2 bg-card rounded-2xl w-full h-full border p-4">
        <h1 className="text-3xl font-bold">{"Haklarını tanı"}</h1>
        <p className="text-muted-foreground">
          {
            "Valyria'nın genç Lumin'leri olarak, haklarımızı bilmek ve bu hakları savunmak önemlidir. Bu sayfada, Valyria'da sahip olduğumuz haklar ve bu hakları nasıl kullanabileceğimiz hakkında bilgi bulabilirsin."
          }
        </p>
      </div>
      <div className="col-span-2 bg-card rounded-2xl w-full h-full border p-4">
        <h1 className="text-3xl font-bold">{"1. Bilgiye erişim hakkı"}</h1>
        <p className="text-muted-foreground">
          {
            "Bilgiye erişim hakkın kısıtlanamaz. Herkesin bilgiye erişim hakkı vardır. Bu hak, Valyria'da yaşayan herkesin bilgiye erişim hakkını korur. Bilgiye erişim hakkı, bireylerin kendilerini geliştirmelerine ve topluma katkıda bulunmalarına yardımcı olur."
          }
        </p>
      </div>
      <div className="col-span-2 bg-card rounded-2xl w-full h-full border p-4">
        <h1 className="text-3xl font-bold">{"2. Sesini duyurabilme hakkı"}</h1>
        <p className="text-muted-foreground">
          {
            "Bir şeyler ters gittiğinde tehdit altında hissetmeden sesini duyurabilirsin. Bildirim panosunda paylaşım yaparak başlayabilirsin."
          }
        </p>
      </div>
      <div className="col-span-2 bg-card rounded-2xl w-full h-full border p-4">
        <h1 className="text-3xl font-bold">{"3. Destek görme hakkı"}</h1>
        <p className="text-muted-foreground">
          {
            "Destek almak bir zayıflık değildir. Ortak bir problemi çözmek için toplulklara soru sorabilirsin."
          }
        </p>
      </div>
    </div>
  );
}
