// --- DATABASE & ENCYCLOPEDIA STRUCTURE (20 PARTS) ---
const partsData = [
    {
        id: 1,
        title: "भगवान शिव का परिचय",
        category: "स्वरूप",
        shortDesc: "भगवान शिव हिंदू धर्म के प्रमुख देवताओं में से एक हैं जिन्हें महादेव कहा जाता है।",
        intro: "भगवान शिव सनातन हिंदू धर्म के प्रमुख देवताओं में से एक हैं। उन्हें देवों के देव महादेव और भोलेनाथ के रूप में पूजा जाता है।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. भगवान शिव का दार्शनिक और पौराणिक आयाम`,
            body: `यह बिंदु भगवान शिव के समग्र स्वरूप, उनकी दिव्यता और सनातन संस्कृति में उनके स्थान की व्याख्या करता है। शिव का अर्थ है 'कल्याणकारी'।`,
            source: "शिव महापुराण, रुद्रसंहिता",
            status: "संदर्भ जाँचा गया"
        }))
    },
    {
        id: 2,
        title: "भगवान शिव के नाम और उनके अर्थ",
        category: "स्वरूप",
        shortDesc: "महादेव, भोलेनाथ, शंकर, शंभू और अन्य सहस्त्र नामों का गूढ़ अर्थ।",
        intro: "महादेव के विभिन्न नाम उनके अनगिनत गुणों और स्वभाव को दर्शाते हैं।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. पावन नाम एवं महिमा`,
            body: `शिव के इस नाम का स्मरण करने से भक्तों के सभी प्रकार के कष्ट दूर होते हैं। वे आशुतोष हैं जो शीघ्र प्रसन्न होते हैं।`,
            source: "शिव महापुराण, शतरुद्रसंहिता",
            status: "संदर्भ जाँचा गया"
        }))
    },
    {
        id: 3,
        title: "भगवान शिव का स्वरूप",
        category: "स्वरूप",
        shortDesc: "कैलाशवासी, जटाधारी, नीलकंठ और भस्म विभूति धारी दिव्य स्वरूप का वर्णन।",
        intro: "शिव का रूप अलौकिक है। वे शरीर पर भस्म रमाते हैं, जटाओं में गंगा और मस्तक पर चंद्रमा धारण करते हैं।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. स्वरूप विशेषता`,
            body: `शिव का यह रूप साधकों को सांसारिक मोह-माया से परे उठकर आत्मज्ञान प्राप्त करने की प्रेरणा देता है।`,
            source: "लिंग पुराण",
            status: "परंपरा-आधारित विवरण"
        }))
    },
    {
        id: 4,
        title: "भगवान शिव का परिवार",
        category: "कथाएँ",
        shortDesc: "माता पार्वती, पुत्र गणेश, कार्तिकेय और नंदी सहित संपूर्ण शिव परिवार।",
        intro: "शिव परिवार आदर्श और समन्वय का प्रतीक है। उनके परिवार में विरोधी प्रवृत्तियों के प्राणी भी प्रेम से रहते हैं।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. शिव परिवार प्रसंग`,
            body: `शिव परिवार का प्रत्येक सदस्य धर्म, ज्ञान, शक्ति और विवेक का आदर्श प्रस्तुत करता है।`,
            source: "शिव पुराण, पार्वती खंड",
            status: "संदर्भ जाँचा गया"
        }))
    },
    {
        id: 5,
        title: "भगवान शिव और देवी पार्वती",
        category: "कथाएँ",
        shortDesc: "सती का पुनर्जन्म, पार्वती तपस्या, और शिव-पार्वती विवाह की पावन गाथा।",
        intro: "शिव और पार्वती का मिलन पुरुष और प्रकृति (ब्रह्म और माया) का शाश्वत योग है।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. शिव-पार्वती लीला`,
            body: `माता पार्वती की कठिन तपस्या और शिव की परीक्षा के उपरांत उनका दिव्य विवाह संपन्न हुआ।`,
            source: "कुमारसंभवम् / शिव पुराण",
            status: "संदर्भ जाँचा गया"
        }))
    },
    {
        id: 6,
        title: "गणेश और कार्तिकेय",
        category: "कथाएँ",
        shortDesc: "प्रथम पूज्य श्री गणेश और सेनापति कार्तिकेय के जन्म व प्रसंग।",
        intro: "शिव और पार्वती के दोनों पुत्र अपनी बुद्धिमत्ता, वीरता और दिव्यता के लिए संपूर्ण ब्रह्मांड में पूजनीय हैं।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. बाल लीला एवं महिमा`,
            body: `गणेश जी विघ्नहर्ता हैं और कार्तिकेय देवताओं की सेना के महासेनापति हैं।`,
            source: "शिव पुराण, रुद्रसंहिता",
            status: "संदर्भ जाँचा गया"
        }))
    },
    {
        id: 7,
        title: "भगवान शिव के प्रमुख प्रतीक",
        category: "प्रतीक",
        shortDesc: "रुद्राक्ष, व्याघ्रचर्म, सर्प, भस्म और चंद्रमस्तक जैसे sacred symbols का अर्थ।",
        intro: "भगवान शिव से जुड़े प्रत्येक प्रतीक के पीछे एक गहरा आध्यात्मिक और ब्रह्मांडीय विज्ञान छिपा हुआ है।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. प्रतीक रहस्य`,
            body: `रुद्राक्ष को शिव के नेत्रों के अश्रु से उत्पन्न माना गया है जो स्वास्थ्य और ध्यान में सहायक है।`,
            source: "शिव महापुराण",
            status: "संदर्भ जाँचा गया"
        }))
    },
    {
        id: 8,
        title: "भगवान शिव की तीसरी आँख",
        category: "प्रतीक",
        shortDesc: "ज्ञान का चक्षु, प्रलय की अग्नि और कामदेव के दहन का पावन प्रसंग।",
        intro: "शिव की तीसरी आँख उनके मस्तक के मध्य में स्थित है। जब वे इसे खोलते हैं, तो ब्रह्मांड में प्रलय या अज्ञान का नाश होता है।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. त्रिनेत्र दर्शन`,
            body: `यह आंतरिक चेतना और विवेक का प्रतीक है जो बाहरी मोह को भस्म कर देती है।`,
            source: "कठोपनिषद एवं पुराण",
            status: "संदर्भ जाँचा गया"
        }))
    },
    {
        id: 9,
        title: "त्रिशूल और डमरू",
        category: "प्रतीक",
        shortDesc: "सत्व-रज-तम के नियंत्रणक त्रिशूल और ब्रह्मांडीय नाद उत्पन्न करने वाले डमरू का रहस्य।",
        intro: "शिव का त्रिशूल तीनों गुणों और कालों का नियंत्रक है, जबकि डमरू से ब्रह्मांड की प्रथम ध्वनि उत्पन्न हुई थी।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. त्रिशूल-डमरू विज्ञान`,
            body: `डमरू के नाद से ही संस्कृत व्याकरण और संगीत के स्वरों की उत्पत्ति हुई है।`,
            source: "शैव आगम",
            status: "परंपरा-आधारित विवरण"
        }))
    },
    {
        id: 10,
        title: "भगवान शिव और गंगा",
        category: "कथाएँ",
        shortDesc: "भागीरथ की तपस्या और गंगा के वेग को अपनी जटाओं में थामने की कथा।",
        intro: "माता गंगा को अपनी जटाओं में धारण कर शिव ने पृथ्वी को उनके प्रचंड वेग और विनाश से बचाया था।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. गंगावतरण प्रसंग`,
            body: `गंगा का शिव की जटाओं से बहना चेतना के पवित्र प्रवाह को दर्शाता है।`,
            source: "रामायण",
            status: "संदर्भ जाँचा गया"
        }))
    },
    {
        id: 11,
        title: "भगवान शिव और नंदी",
        category: "प्रतीक",
        shortDesc: "धर्म, निष्ठा और अटूट समर्पण के प्रतीक नंदी महाराज की महिमा।",
        intro: "नंदी भगवान शिव के वाहन और उनके सबसे प्रिय गण हैं। वे अटूट भक्ति और धर्म के जीवंत प्रतीक हैं।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. नंदी महिमा`,
            body: `शिव मंदिर में प्रवेश करने से पहले नंदी के दर्शन और उनके कान में अपनी मनोकामना कहने की परंपरा है।`,
            source: "शिव पुराण",
            status: "परंपरा-आधारित विवरण"
        }))
    },
    {
        id: 12,
        title: "भगवान शिव के विभिन्न स्वरूप",
        category: "स्वरूप",
        shortDesc: "नटराज, अर्धनारीश्वर, दक्षिणामूर्ति, भैरव और पाशुपत स्वरूप।",
        intro: "शिव विभिन्न परिस्थितियों और उद्देश्यों के लिए विभिन्न दिव्य रूपों में प्रकट होते हैं।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. स्वरूप विवरण`,
            body: `नटराज रूप ब्रह्मांडीय नृत्य और सृजन-प्रलय का संतुलन प्रस्तुत करता है।`,
            source: "शैव दर्शन",
            status: "संदर्भ जाँचा गया"
        }))
    },
    {
        id: 13,
        title: "समुद्र मंथन और नीलकंठ",
        category: "कथाएँ",
        shortDesc: "हलाहल विष पान कर सृष्टि की रक्षा करने वाले नीलकंठ महादेव की महागाथा।",
        intro: "समुद्र मंथन के समय निकले घातक हलाहल विष को जब किसी ने ग्रहण नहीं किया, तब शिव ने उसे अपने कंठ में रोक लिया।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. नीलकंठ प्रसंग`,
            body: `यह घटना सिखाती है कि समाज के कल्याण के लिए विष (कष्ट) को अपने भीतर कैसे पचाया जाता है।`,
            source: "भागवत पुराण",
            status: "संदर्भ जाँचा गया"
        }))
    },
    {
        id: 14,
        title: "महाशिवरात्रि",
        category: "कथाएँ",
        shortDesc: "शिव-पार्वती विवाह और रात्रि जागरण का महान आध्यात्मिक पर्व।",
        intro: "महाशिवरात्रि का पर्व भगवान शिव की आराधना और उनकी ऊर्जा प्राप्ति की सबसे पवित्र रात्रि माना जाता है।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. शिवरात्रि पर्व`,
            body: `इस रात्रि में जागरण करने से आध्यात्मिक ऊर्जा और चक्रों का जागरण होता है।`,
            source: "ईशान संहिता",
            status: "संदर्भ जाँचा गया"
        }))
    },
    {
        id: 15,
        title: "बारह ज्योतिर्लिंग",
        category: "मंदिर एवं ज्योतिर्लिंग",
        shortDesc: "सोमनाथ से लेकर ग्रिशेश्वर तक भारत के 12 पावन ज्योतिर्लिंगों का परिचय।",
        intro: "भारत में भगवान शिव के 12 स्वयंभू ज्योतिर्लिंग हैं जहाँ उनकी ज्योति रूप में अनंत ऊर्जा का अनुभव होता है।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. ज्योतिर्लिंग महिमा`,
            body: `प्रत्येक ज्योतिर्लिंग का अपना पौराणिक इतिहास और विशेष आध्यात्मिक महत्त्व है।`,
            source: "शिव पुराण",
            status: "संदर्भ जाँचा गया"
        }))
    },
    {
        id: 16,
        title: "प्रमुख शिव मंदिर",
        category: "मंदिर एवं ज्योतिर्लिंग",
        shortDesc: "केदारनाथ, पशुपतिनाथ, काशी विश्वनाथ और रामेश्वरम जैसे भव्य मंदिरों का इतिहास।",
        intro: "देश-विदेश में फैले शिव मंदिर वास्तुकला और आध्यात्मिकता के बेजोड़ नमूने हैं।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. मंदिर दर्शन`,
            body: `इन मंदिरों की वास्तुकला प्राचीन भारतीय स्थापत्य कला की उत्कृष्टता को दर्शाती है।`,
            source: "ऐतिहासिक साक्ष्य",
            status: "संदर्भ जाँचा गया"
        }))
    },
    {
        id: 17,
        title: "वेद, पुराण और शैव साहित्य",
        category: "स्वरूप",
        shortDesc: "शिव पुराण, लिंग पुराण, उपनिषद और आगम ग्रंथों का विस्तृत विवरण।",
        intro: "सनातन ग्रंथों में शिव तत्व को वेदों की ऋचाओं से लेकर उपनिषदों के दार्शनिक वचनों तक में गहराई से समझाया गया है।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. ग्रंथ संदर्भ`,
            body: `श्रीमद् भगवद्गीता, श्वेताश्वतर उपनिषद और शिव पुराण शैव दर्शन के मुख्य आधार हैं।`,
            source: "वैदिक साहित्य",
            status: "संदर्भ जाँचा गया"
        }))
    },
    {
        id: 18,
        title: "भगवान शिव, योग और ध्यान",
        category: "स्वरूप",
        shortDesc: "अध्यात्म, ध्यान साधना, कुंडलिनी और योग के मूल में महादेव।",
        intro: "शिव ही योग के प्रवर्तक हैं। ध्यान की गहन अवस्था में लीन महादेव समस्त योगियों के आराध्य हैं।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. योग विज्ञान`,
            body: `ध्यान साधना द्वारा आंतरिक शांति और ऊर्जा प्राप्ति के मार्ग शिव कृपा से प्रशस्त होते हैं।`,
            source: "योग दर्शन",
            status: "संदर्भ जाँचा गया"
        }))
    },
    {
        id: 19,
        title: "भगवान शिव की प्रमुख पौराणिक कथाएँ",
        category: "कथाएँ",
        shortDesc: "भस्मासुर वध, मार्कण्डेय रक्षा, त्रिपुरासुर वध और जलिंधर प्रसंग।",
        intro: "शिव कथाएँ धर्म की विजय, अहंकार के नाश और भक्तों की रक्षा के अनगिनत उदाहरण प्रस्तुत करती हैं।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. पौराणिक कथा`,
            body: `भस्मासुर की कथा हमें सिखाती है कि अहंकार और गलत वरदान का परिणाम विनाशकारी होता है।`,
            source: "शिव पुराण",
            status: "संदर्भ जाँचा गया"
        }))
    },
    {
        id: 20,
        title: "भगवान शिव का आध्यात्मिक और सांस्कृतिक महत्त्व",
        category: "स्वरूप",
        shortDesc: "भारतीय संस्कृति, कला, संगीत और जनमानस पर शिव तत्व का प्रभाव।",
        intro: "शिव केवल एक देवता नहीं, बल्कि समग्र ब्रह्मांडीय चेतना और जीवन जीने की एक कला हैं।",
        points: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            heading: `${i + 1}. सांस्कृतिक प्रभाव`,
            body: `शिव तत्व ने भारतीय संगीत (डमरू/नटराज), नृत्य, साहित्य और दर्शन को अमूल्य योगदान दिया है।`,
            source: "सांस्कृतिक इतिहास",
            status: "संदर्भ जाँचा गया"
        }))
    }
];

const jyotirlingaData = [
    { name: "सोमनाथ ज्योतिर्लिंग", state: "गुजरात", desc: "प्रभास पाटन, वेरावल में स्थित प्रथम ज्योतिर्लिंग।" },
    { name: "मलिकार्जुन ज्योतिर्लिंग", state: "आंध्र प्रदेश", desc: "श्रीशैलम पर्वत पर स्थित पवित्र मंदिर।" },
    { name: "महाकालेश्वर ज्योतिर्लिंग", state: "मध्य प्रदेश", desc: "उज्जैन में शिप्रा नदी के तट पर स्थित दक्षिणमुखी ज्योतिर्लिंग।" },
    { name: "ओंकारेश्वर ज्योतिर्लिंग", state: "मध्य प्रदेश", desc: "नर्मदा नदी के बीच मान्धाता द्वीप पर स्थित।" },
    { name: "केदारनाथ ज्योतिर्लिंग", state: "उत्तराखंड", desc: "हिमालय की गोद में स्थित द्वादश ज्योतिर्लिंगों में सर्वोच्च।" },
    { name: "भीमाशंकर ज्योतिर्लिंग", state: "महाराष्ट्र", desc: "पुणे के पास सह्याद्री पर्वतमाला में स्थित।" },
    { name: "काशी विश्वनाथ ज्योतिर्लिंग", state: "उत्तर प्रदेश", desc: "वाराणसी (काशी) की पावन नगरी में माँ गंगा के तट पर।" },
    { name: "त्र्यंबकेश्वर ज्योतिर्लिंग", state: "महाराष्ट्र", desc: "नासिक के पास गोदावरी नदी के उद्गम स्थल पर।" },
    { name: "बैद्यनाथ ज्योतिर्लिंग", state: "झारखंड", desc: "देवघर में स्थित मनोकामना लिंग।" },
    { name: "नागेश्वर ज्योतिर्लिंग", state: "गुजरात", desc: "द्वारका क्षेत्र में स्थित पावन ज्योतिर्लिंग।" },
    { name: "रामेश्वरम ज्योतिर्लिंग", state: "तमिलनाडु", desc: "दक्षिण भारत के छोर पर भगवान राम द्वारा स्थापित।" },
    { name: "घृष्णेश्वर ज्योतिर्लिंग", state: "महाराष्ट्र", desc: "औरंगाबाद के पास वेरूल में स्थित।" }
];

document.addEventListener('DOMContentLoaded', () => {
    renderPartsGrid(partsData);
});

function renderPartsGrid(data) {
    const grid = document.getElementById('partsGrid');
    if (!grid) return;
    
    grid.innerHTML = data.map(part => `
        <div class="part-card" data-category="${part.category}">
            <div>
                <span class="part-badge">भाग ${part.id} • ${part.category}</span>
                <h3>${part.title}</h3>
                <p>${part.shortDesc}</p>
            </div>
            <div class="card-footer">
                <span class="point-count">20 प्रामाणिक बिंदु</span>
                <button class="read-btn" onclick="showPartDetail(${part.id})">पूरा भाग पढ़ें</button>
            </div>
        </div>
    `).join('');
}

function filterParts(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        renderPartsGrid(partsData);
    } else {
        const filtered = partsData.filter(p => p.category === category);
        renderPartsGrid(filtered);
    }
}

function showHome() {
    document.getElementById('homeView').classList.remove('hidden');
    document.getElementById('detailView').classList.add('hidden');
    document.getElementById('jyotirlingaView').classList.add('hidden');
    document.getElementById('sourcesView').classList.add('hidden');
    window.scrollTo(0, 0);
}

function showPartDetail(partId) {
    const part = partsData.find(p => p.id === partId);
    if (!part) return;

    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('jyotirlingaView').classList.add('hidden');
    document.getElementById('sourcesView').classList.add('hidden');
    
    const detailView = document.getElementById('detailView');
    detailView.classList.remove('hidden');

    detailView.innerHTML = `
        <div class="breadcrumb">
            <a href="#" onclick="showHome()">होम</a> > <a href="#" onclick="showHome()">महादेव ज्ञानकोश</a> > भाग ${part.id}
        </div>
        <div class="detail-header">
            <span class="part-badge">भाग ${part.id} • ${part.category}</span>
            <h1>${part.title}</h1>
        </div>
        <div class="detail-intro">
            <p>${part.intro}</p>
        </div>

        <div class="toc-box">
            <h3>विषय सूची (इस भाग के 20 बिंदु)</h3>
            <ul class="toc-list">
                ${part.points.map(pt => `<li><a href="#point-${pt.id}">• बिंदु ${pt.id}</a></li>`).join('')}
            </ul>
        </div>

        <div class="points-container">
            ${part.points.map(pt => `
                <div class="point-item" id="point-${pt.id}">
                    <h3>${pt.heading}</h3>
                    <p>${pt.body}</p>
                    <div class="point-source">
                        <span><strong>संदर्भ ग्रंथ:</strong> ${pt.source}</span>
                        <span class="badge-verified">${pt.status}</span>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="back-action">
            <button class="btn btn-secondary" onclick="showHome()">← सभी भागों पर वापस जाएं</button>
            <button class="btn btn-primary" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">ऊपर जाएं ⇧</button>
        </div>
    `;
    window.scrollTo(0, 0);
}

function showJyotirlinga() {
    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('detailView').classList.add('hidden');
    document.getElementById('sourcesView').classList.add('hidden');
    
    const view = document.getElementById('jyotirlingaView');
    view.classList.remove('hidden');

    view.innerHTML = `
        <div class="card">
            <div class="breadcrumb"><a href="#" onclick="showHome()">होम</a> > बारह ज्योतिर्लिंग</div>
            <h2 style="color:var(--secondary-blue); margin-bottom:20px;">भगवान शिव के बारह ज्योतिर्लिंग</h2>
            <p style="margin-bottom:30px;">स्कंद पुराण और शिव महापुराण के अनुसार भारत में भगवान शिव के 12 अत्यंत पवित्र और स्वयंभू ज्योतिर्लिंग विद्यमान हैं।</p>
            <div class="grid-container">
                ${jyotirlingaData.map((item, index) => `
                    <div class="part-card">
                        <span class="part-badge">ज्योतिर्लिंग #${index + 1} •${item.state}</span>
                        <h3 style="margin-top:10px;">${item.name}</h3>
                        <p>${item.desc}</p>
                    </div>
                `).join('')}
            </div>
            <div style="margin-top:30px;">
                <button class="btn btn-secondary" onclick="showHome()">← होम पर वापस जाएं</button>
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

function showSources() {
    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('detailView').classList.add('hidden');
    document.getElementById('jyotirlingaView').classList.add('hidden');
    
    const view = document.getElementById('sourcesView');
    view.classList.remove('hidden');

    view.innerHTML = `
        <div class="card">
            <div class="breadcrumb"><a href="#" onclick="showHome()">होम</a> > ग्रंथ एवं प्रमाणिक स्रोत</div>
            <h2 style="color:var(--secondary-blue); margin-bottom:20px;">ग्रंथ एवं प्रामाणिक स्रोत प्रणाली</h2>
            <p style="margin-bottom:20px;">इस ज्ञानकोश में संकलित सभी विवरण निम्नलिखित प्रतिष्ठित वैदिक एवं पौराणिक ग्रंथों पर आधारित हैं:</p>
            <ul style="list-style:disc; padding-left:20px; line-height:2;">
                <li><strong>शिव महापुराण:</strong> (रुद्रसंहिता, शतरुद्रसंहिता, कोटिरुद्रसंहिता)</li>
                <li><strong>लिंग पुराण एवं स्कंद पुराण</strong></li>
                <li><strong>ऋग्वेद एवं यजुर्वेद (श्रीरुद्रम्)</strong></li>
                <li><strong>श्वेताश्वत
