import React from "react";
import Text from "../../../components/Text/Text";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Button from "../../../components/Button/Button";
import LanguageIcon from "../../../components/Svg/Icons/Language";
import { Language } from "../types";
import MenuButton from "./MenuButton";

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang }) => (

  <Dropdown
    position="bottom"
    target={
      <Button variant="text" mx='5px' startIcon={<img src={`/images/languages/${currentLang}.svg`} alt='language' width="24px"/>} style={{padding: 0}}>
        {/* <Text color="white" height="16px" style={{lineHeight:1}} mr='5px'>{currentLang?.toUpperCase()}</Text> */}
      </Button>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.locale}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto" }}
        startIcon={<img src={`/images/languages/${lang.code}.svg`} alt='language' width="20px"/>}
      >
        &nbsp;&nbsp;{lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
