export default [
  {
    date: '1 Ağustos 2024',
    slug: 'reacte-giris',
    title: 'React’e Giriş',
    description:
      'React, kullanıcı arayüzleri oluşturmak için güçlü bir kütüphanedir. React’in temellerini öğrenin ve dinamik web uygulamaları oluşturmanın yollarını keşfedin.',
    keywords: ['React', 'JavaScript', 'Ön Yüz Geliştirme'],
    content: `## React’e Giriş

React, Facebook tarafından geliştirilen popüler bir JavaScript kütüphanesidir. Kullanıcı arayüzleri oluşturmanıza ve uygulamanızın durumunu etkili bir şekilde yönetmenize olanak tanır.

![React](https://picsum.photos/200/300)

### Temel Özellikler

- **Bileşen Bazlı**: Kendi durumunu yöneten kapsüllenmiş bileşenler oluşturun.
- **Deklaratif**: Etkileşimli kullanıcı arayüzlerini kolayca oluşturun.
- **Sanal DOM**: Bileşenleri etkin bir şekilde güncelleyin ve render edin.`,
  },
  {
    date: '5 Ağustos 2024',
    slug: 'nodejs-ile-server-olusturma',
    title: 'Node.js ile Sunucu Oluşturma',
    description:
      'Node.js kullanarak hızlı ve ölçeklenebilir bir sunucu oluşturmayı öğrenin. Bu makalede temel sunucu oluşturma adımlarını ve en iyi uygulamaları bulabilirsiniz.',
    keywords: ['Node.js', 'Sunucu', 'Backend Geliştirme'],
    content: `## Node.js ile Sunucu Oluşturma

Node.js, hızlı ve ölçeklenebilir ağ uygulamaları geliştirmek için kullanılan bir JavaScript çalışma zamanıdır. Bu makalede, temel bir HTTP sunucusu nasıl oluşturulur öğrenebilirsiniz.

### Adımlar

1. **Node.js’i Yükleyin**: Node.js’in en son sürümünü [resmi web sitesinden](https://nodejs.org) indirin ve yükleyin.
2. **Yeni Bir Proje Başlatın**: Bir dizin oluşturun ve içine \`package.json\` dosyasını oluşturun.
3. **Sunucu Kodunu Yazın**:
   \`\`\`javascript
   const http = require('http');

   const server = http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Merhaba Dünya!\\n');
   });

   server.listen(3000, '127.0.0.1', () => {
     console.log('Sunucu çalışıyor, http://127.0.0.1:3000');
   });
   \`\`\`
4. **Sunucuyu Çalıştırın**: Terminalde \`node server.js\` komutunu çalıştırarak sunucuyu başlatın.`,
  },
  {
    date: '10 Ağustos 2024',
    slug: 'typescriptin-avantajlari',
    title: 'TypeScript’in Avantajları',
    description:
      'TypeScript, JavaScript’in üzerinde ek özellikler sunar. Bu makalede, TypeScript’in avantajlarını ve nasıl kullanıldığını öğrenin.',
    keywords: ['TypeScript', 'JavaScript', 'Tip Güvenliği'],
    content: `## TypeScript’in Avantajları

TypeScript, JavaScript’in bir üst kümesi olup, statik tür denetimi ve modern JavaScript özelliklerini destekler. Bu makalede, TypeScript’in sunduğu avantajları inceleyeceğiz.

### Avantajlar

- **Tip Güvenliği**: Hataları erken aşamada yakalar ve kodun güvenilirliğini artırır.
- **Modern JavaScript Özellikleri**: ES6 ve daha yeni özellikleri destekler.
- **Gelişmiş Araç Desteği**: IDE’lerde daha iyi otomatik tamamlama ve hata ayıklama sağlar.

![TypeScript](https://picsum.photos/200/300)`,
  },
  {
    date: '15 Ağustos 2024',
    slug: 'docker-ile-kapsayici-yonetimi',
    title: 'Docker ile Kapsayıcı Yönetimi',
    description:
      'Docker, uygulamaları kapsayıcılar içinde çalıştırmayı kolaylaştırır. Bu makalede, Docker kullanarak kapsayıcı yönetimini öğreneceksiniz.',
    keywords: ['Docker', 'Kapsayıcı Yönetimi', 'DevOps'],
    content: `## Docker ile Kapsayıcı Yönetimi

Docker, uygulamaları ve bağımlılıklarını kapsayıcılar içinde paketlemeyi ve dağıtmayı sağlayan bir platformdur. İşte Docker ile kapsayıcı yönetimi için temel adımlar:

### Başlangıç

1. **Docker’ı Kurun**: [Docker’ın resmi web sitesinden](https://www.docker.com) Docker’ı indirip kurun.
2. **Yeni Bir Kapsayıcı Başlatın**:
   \`\`\`bash
   docker run -d -p 80:80 --name webserver nginx
   \`\`\`
3. **Kapsayıcıyı Yönetme**:
   - **Kapsayıcıları Listeleme**: \`docker ps\`
   - **Kapsayıcıyı Durdurma**: \`docker stop webserver\`
   - **Kapsayıcıyı Silme**: \`docker rm webserver\``,
  },
  {
    date: '20 Ağustos 2024',
    slug: 'graphql-nedir',
    title: 'GraphQL Nedir?',
    description:
      'GraphQL, API’ler için güçlü bir sorgu dilidir. Bu makalede, GraphQL’in ne olduğunu ve nasıl çalıştığını keşfedin.',
    keywords: ['GraphQL', 'API', 'Veri Sorgulama'],
    content: `## GraphQL Nedir?

GraphQL, API’ler için bir sorgu dilidir ve verileri istemciler için daha esnek bir şekilde sorgulamanıza olanak tanır.

### Temel Özellikler

- **İstemci Tarafından Sorgulama**: İstemciler sadece ihtiyaç duydukları verileri sorgular.
- **Tip Güvenliği**: Sorgu ve veri tipleri şemalarla tanımlanır.
- **Tek Bir API Uç Noktası**: Tüm sorgular ve mutasyonlar tek bir uç noktadan yapılır.

![GraphQL](https://picsum.photos/200/300)`,
  },
  {
    date: '25 Ağustos 2024',
    slug: 'yapay-zeka-ve-makine-ogrenmesi',
    title: 'Yapay Zeka ve Makine Öğrenmesi',
    description:
      'Yapay zeka ve makine öğrenmesi, veri analizi ve karar verme süreçlerinde devrim yaratmaktadır. Bu makalede, bu teknolojilerin nasıl çalıştığını öğrenin.',
    keywords: ['Yapay Zeka', 'Makine Öğrenmesi', 'Veri Bilimi'],
    content: `## Yapay Zeka ve Makine Öğrenmesi

Yapay zeka (AI) ve makine öğrenmesi (ML), bilgisayar sistemlerinin insan benzeri görevleri yerine getirmesini sağlar. Bu makalede, AI ve ML’in temel kavramlarını inceleyeceğiz.

### Temel Kavramlar

- **Yapay Zeka**: İnsan benzeri düşünme ve öğrenme yeteneklerini taklit eden sistemler.
- **Makine Öğrenmesi**: Sistemlerin verilerden öğrenmesini ve performansını artırmasını sağlar.
- **Derin Öğrenme**: Büyük veri setleri ile daha karmaşık öğrenme görevlerini yerine getirir.

![Yapay Zeka](https://picsum.photos/200/300)`,
  },
  {
    date: '30 Ağustos 2024',
    slug: 'bulut-bilisim-ve-gelismis-teknolojiler',
    title: 'Bulut Bilişim ve Gelişmiş Teknolojiler',
    description:
      'Bulut bilişim, modern teknolojilerin merkezinde yer alıyor. Bu makalede, bulut bilişimin gelişmiş teknolojilere etkisini keşfedin.',
    keywords: ['Bulut Bilişim', 'Teknoloji', 'IT Altyapı'],
    content: `## Bulut Bilişim ve Gelişmiş Teknolojiler

Bulut bilişim, uygulama ve veri yönetimini internet üzerinden yapmanıza olanak tanır. Bu makalede, bulut bilişimin gelişmiş teknolojilere olan etkisini inceleyeceğiz.

### Temel Kavramlar

- **SaaS (Yazılım Hizmeti Olarak)**: Yazılımlar bulut üzerinden hizmet olarak sunulur.
- **IaaS (Altyapı Hizmeti Olarak)**: Fiziksel sunucular ve depolama bulut hizmeti olarak sağlanır.
- **PaaS (Platform Hizmeti Olarak)**: Uygulama geliştirme için bulut tabanlı platformlar sunar.

![Bulut Bilişim](https://picsum.photos/200/300)`,
  },
];
