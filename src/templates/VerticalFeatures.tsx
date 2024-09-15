import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Your title here"
    description="यह वेबसाइट उन प्रॉपर्टी डीलरों के लिए है जो अपनी ज़मीनों और प्रॉपर्टी को बेचने या किराए पर देने के लिए एक डिजिटल प्लेटफॉर्म ढूंढ रहे हैं। हम आपको विभिन्न प्रकार की ज़मीन जैसे आवासीय, वाणिज्यिक, औद्योगिक और कृषि भूमि के बारे में विस्तृत जानकारी प्रदान करते हैं।

यदि आप कोई ज़मीन खरीदने या बेचने की योजना बना रहे हैं, तो हमारी वेबसाइट आपको एक सरल और विश्वसनीय तरीका देती है, जिससे आप संभावित ग्राहकों तक आसानी से पहुंच सकते हैं। हम आपको ज़मीन की सही कीमत, स्थान, और अन्य महत्वपूर्ण जानकारी उपलब्ध कराते हैं ताकि आपका लेन-देन पारदर्शी और लाभकारी हो।"
  >
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/land3.jpeg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/land7.jpeg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
