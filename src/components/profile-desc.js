import { LoremIpsum } from "lorem-ipsum";


const lorem = new LoremIpsum({
  sentencesPerParagraph: { max: 8, min: 4 },
  wordsPerSentence: { max: 16, min: 4 }
});

/**********************************************************************************************
 * @Purpose: Get a static description from LoremIpsum npm package
 * @Input: N/A
 * @Output: N/A
***********************************************************************************************/
function ProfileDesc() {  
  const desc = lorem.generateSentences(4); // lorem.generateParagraphs(2);
  return <>{desc}</>;
}
export default ProfileDesc;
