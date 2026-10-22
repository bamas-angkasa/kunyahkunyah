import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'KunyahKunyah — Jastip sesuai budget',description:'Belanja titipan jadi gampang. Pilih produk, cek budget, dan pesan langsung via WhatsApp.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body>{children}</body></html>}
