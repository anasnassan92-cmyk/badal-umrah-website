import { Check, X } from "lucide-react";

interface PackageRow {
  name: string;
  nameAr: string;
  deliveryTime: string;
  specialDate: boolean;
  photosVideos: boolean;
  certificate: boolean;
  liveBroadcast: boolean;
  ongoingCharity: boolean;
}

const packages: PackageRow[] = [
  {
    name: "Du'a Package",
    nameAr: "باكيج الدعاء",
    deliveryTime: "Within 7 days",
    specialDate: false,
    photosVideos: true,
    certificate: false,
    liveBroadcast: false,
    ongoingCharity: false,
  },
  {
    name: "Noor Package",
    nameAr: "باكيج النور",
    deliveryTime: "1–2 days max",
    specialDate: true,
    photosVideos: true,
    certificate: true,
    liveBroadcast: false,
    ongoingCharity: false,
  },
  {
    name: "Barakah Package",
    nameAr: "باكيج البركة",
    deliveryTime: "Flexible / Fast",
    specialDate: true,
    photosVideos: true,
    certificate: true,
    liveBroadcast: true,
    ongoingCharity: false,
  },
  {
    name: "Ongoing Umrah",
    nameAr: "العمرة الجارية",
    deliveryTime: "Customer-selected",
    specialDate: true,
    photosVideos: true,
    certificate: true,
    liveBroadcast: false,
    ongoingCharity: true,
  },
];

const columns = [
  { key: "deliveryTime" as const, label: "Delivery Time", labelAr: "مدة التنفيذ" },
  { key: "specialDate" as const, label: "Special Date", labelAr: "تاريخ مخصص" },
  { key: "photosVideos" as const, label: "Photos & Videos", labelAr: "صور وفيديو" },
  { key: "certificate" as const, label: "Umrah Certificate", labelAr: "شهادة عمرة" },
  { key: "liveBroadcast" as const, label: "Live Broadcast", labelAr: "بث مباشر" },
  { key: "ongoingCharity" as const, label: "Ongoing Charity", labelAr: "صدقة جارية" },
];

const BoolIcon = ({ value }: { value: boolean }) =>
  value ? (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent/15">
      <Check className="w-4 h-4 text-accent" />
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-destructive/10">
      <X className="w-4 h-4 text-destructive" />
    </span>
  );

const CompareTable = () => {
  return (
    <section id="compare" className="py-24 bg-gradient-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-semibold mb-4 font-body">
            Compare Packages
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            🕋 <span className="text-gradient-gold">Umrah Packages</span> Comparison
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            Find the perfect package that suits your needs
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-lg border border-gold/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-5 font-heading text-foreground font-semibold">Package</th>
                    {columns.map((col) => (
                      <th key={col.key} className="p-5 text-center">
                        <span className="block text-sm font-semibold text-foreground font-body">{col.label}</span>
                        <span className="block text-xs text-muted-foreground font-arabic mt-1">{col.labelAr}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {packages.map((pkg, i) => (
                    <tr
                      key={pkg.name}
                      className={`border-b border-border/50 hover:bg-sand/50 transition-colors ${
                        i === packages.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <td className="p-5">
                        <span className="block font-heading font-semibold text-foreground">{pkg.name}</span>
                        <span className="block text-sm text-muted-foreground font-arabic">{pkg.nameAr}</span>
                      </td>
                      <td className="p-5 text-center text-sm text-foreground font-body">{pkg.deliveryTime}</td>
                      {(["specialDate", "photosVideos", "certificate", "liveBroadcast", "ongoingCharity"] as const).map(
                        (key) => (
                          <td key={key} className="p-5 text-center">
                            <BoolIcon value={pkg[key]} />
                          </td>
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-6 max-w-md mx-auto">
          {packages.map((pkg) => (
            <div key={pkg.name} className="bg-card rounded-xl shadow-md border border-gold/10 p-5">
              <h3 className="font-heading font-bold text-foreground text-lg mb-1">{pkg.name}</h3>
              <p className="text-sm text-muted-foreground font-arabic mb-4">{pkg.nameAr}</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-body">
                  <span className="text-muted-foreground">Delivery Time</span>
                  <span className="text-foreground font-medium">{pkg.deliveryTime}</span>
                </div>
                {(["specialDate", "photosVideos", "certificate", "liveBroadcast", "ongoingCharity"] as const).map(
                  (key, idx) => (
                    <div key={key} className="flex justify-between items-center text-sm font-body">
                      <span className="text-muted-foreground">{columns[idx + 1].label}</span>
                      <BoolIcon value={pkg[key]} />
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompareTable;
