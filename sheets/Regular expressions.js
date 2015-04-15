// Regular expressions 

// A voir sur http://www.regexr.com/2rhq7

// mot : utiliser dans la recherche de base de données pour trouver le premier mot d'une case 
[a-zA-Z]+
// adresses mails: 
[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?

//URL retraité des recherches google
\/url\?q=(.+)&sa

// espace 
\s

// Matches any digit character (0-9). Equivalent to [0-9].
\d

// Code NAF
\d{4}[A-Z]{1}


// recherche des noms de domaines
[^\sw\.@/]([0-9a-zA-Z\-\.]*[0-9a-zA-Z\-]+\.)(de|com|org|net|edu|DE|COM|ORG|NET|EDU)

// Avec ajout des autres fin d'URL possibles extraites de wikipédia

[^\sw\.@/]([0-9a-zA-Z\-\.]*[0-9a-zA-Z\-]+\.)(com|org|net|int|edu|gov|mil|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|bq|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cw|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zr|zw|academy|accountants|active|actor|adult|aero|agency|airforce|archi|army|associates|attorney|auction|audio|autos|band|bargains|beer|best|bid|bike|bio|biz|black|blackfriday|blue|boo|boutique|build|builders|business|buzz|cab|camera|camp|cancerresearch|capital|cards|care|career|careers|cash|catering|center|ceo|channel|cheap|christmas|church|city|claims|cleaning|click|clinic|clothing|club|coach|codes|coffee|college|community|company|computer|condos|construction|consulting|contractors|cooking|cool|country|credit|creditcard|cricket|cruises|dad|dance|dating|day|deals|degree|delivery|democrat|dental|dentist|diamonds|diet|digital|direct|directory|discount|domains|eat|education|email|energy|engineer|engineering|equipment|esq|estate|events|exchange|expert|exposed|fail|farm|feedback|finance|financial|fish|fishing|fitness|flights|florist|fly|foo|forsale|foundation|fund|furniture|futbol|gallery|gift|gifts|gives|glass|global|gop|graphics|green|gripe|guide|guitars|guru|healthcare|help|here|hiphop|hiv|holdings|holiday|homes|horse|host|hosting|house|how|info|ing|ink|institute[51]|insure|international|investments|jobs|kim|kitchen|land|lawyer|legal|lease|lgbt|life|lighting|limited|limo|link|loans|lotto|luxe|luxury|management|market|marketing|media|meet|meme|memorial|menu|mobi|moe|money|mortgage|motorcycles|mov|museum|name|navy|network|new|ngo|ninja|ong|onl|ooo|organic|partners|parts|party|pharmacy|photo|photography|photos|physio|pics|pictures|pink|pizza|place|plumbing|poker|porn|post|press|pro|productions|prof|properties|property|qpon|recipes|red|rehab|ren|rentals|repair|report|republican|reviews|rich|rip|rocks|rodeo|rsvp|science|services|sexy|shoes)