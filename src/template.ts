export function getTemplate(cvData: any, resolve: (val: any) => string): string {
    return `\\documentclass[letterpaper,11pt]{article}
  
  \\usepackage{latexsym}
  \\usepackage[empty]{fullpage}
  \\usepackage{titlesec}
  \\usepackage{marvosym}
  \\usepackage[usenames,dvipsnames]{color}
  \\usepackage{verbatim}
  \\usepackage{enumitem}
  \\usepackage[hidelinks]{hyperref}
  \\usepackage{fancyhdr}
  \\usepackage[english]{babel}
  \\usepackage{tabularx}
  \\input{glyphtounicode}
  \\usepackage{fontawesome5}
  
  \\pagestyle{fancy}
  \\fancyhf{} 
  \\fancyfoot{}
  \\renewcommand{\\headrulewidth}{0pt}
  \\renewcommand{\\footrulewidth}{0pt}
  
  % Adjust margins
  \\addtolength{\\oddsidemargin}{-0.5in}
  \\addtolength{\\evensidemargin}{-0.5in}
  \\addtolength{\\textwidth}{1in}
  \\addtolength{\\topmargin}{-.5in}
  \\addtolength{\\textheight}{1.0in}
  
  \\urlstyle{same}
  
  \\raggedbottom
  \\raggedright
  \\setlength{\\tabcolsep}{0in}
  
  % Sections formatting - FIXED SPELLING TO TITLERULE
  \\titleformat{\\section}{
    \\vspace{-4pt}\\scshape\\raggedright\\large
  }{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]
  
  \\pdfgentounicode=1
  
  %-------------------------
  % Custom commands - ALL ORIGINAL MACROS RESTORED EXACTLY
  \\newcommand{\\resumeItem}[1]{
    \\item\\small{
      {#1 \\vspace{-2pt}}
    }
  }
  
  \\newcommand{\\resumeSubheading}[4]{
    \\vspace{-2pt}\\item
      \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
        \\textbf{#1} & #2 \\\\
        \\textit{\\small#3} & \\textit{\\small #4} \\\\
      \\end{tabular*}\\vspace{-7pt}
  }
  
  \\newcommand{\\resumeSubSubheading}[2]{
      \\item
      \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
        \\textit{\\small#1} & \\textit{\\small #2} \\\\
      \\end{tabular*}\\vspace{-7pt}
  }
  
  \\newcommand{\\resumeProjectHeading}[2]{
      \\item
      \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
        \\small#1 & #2 \\\\
      \\end{tabular*}\\vspace{-7pt}
  }
  
  \\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}
  
  \\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}
  
  \\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
  \\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
  \\newcommand{\\resumeItemListStart}{\\begin{itemize}}
  \\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}
  
  %-------------------------------------------
  \\begin{document}
  
  %----------HEADING----------
  \\begin{center}
      \\textbf{\\Huge \\scshape ${resolve(cvData.basics.name)}} \\\\ \\vspace{2pt}
      \\textbf{${resolve(cvData.basics.title)}} \\\\ \\vspace{2pt}
      \\faPhone* \\small ${resolve(cvData.basics.phone)} 
      \\faMapMarker* ${resolve(cvData.basics.location)} \\\\ \\vspace{1pt}
      \\faEnvelope[regular] \\href{mailto:${cvData.basics.email}}{\\underline{${resolve(cvData.basics.email)}}}
      \\faLinkedinIn[regular] \\href{${cvData.basics.linkedin}}{\\underline{/in/urwah-sajjad-9b587470/}}
      \\faGithub[regular] \\href{${cvData.basics.github}}{\\underline{github.com/usajjad123}}
  \\end{center}
  
  \\section{Professional Summary}
  ${resolve(cvData.summary)}
  
  \\section{Experience}
    \\resumeSubHeadingListStart
    ${cvData.experience.map((exp: any) => `
      ${exp.pagebreak ? '\\newpage' : ''}
      \\resumeSubheading
        {${resolve(exp.company)}}{${resolve(exp.date)}}
        {${resolve(exp.position)}}{${resolve(exp.location)}}
        \\resumeItemListStart
${exp.highlights.map((hl: string) => `          \\resumeItem{${resolve(hl)}}`).join('\n')}
        \\resumeItemListEnd
      \\vspace{6pt}
    `).join('\n')}
    \\resumeSubHeadingListEnd
  
  \\section{Projects}
    \\resumeSubHeadingListStart
    ${cvData.projects.map((proj: any) => `
      \\resumeProjectHeading
        {${proj.url ? `\\href{${proj.url}}{\\underline{\\textbf{${resolve(proj.name)}}}}` : `\\textbf{${resolve(proj.name)}}`}}{${resolve(proj.date)}}
        \\resumeItemListStart
${proj.highlights.map((hl: string) => `          \\resumeItem{${resolve(hl)}}`).join('\n')}
        \\resumeItemListEnd
    `).join('\n')}
    \\resumeSubHeadingListEnd
  
  \\section{Education/Certificates}
    \\resumeSubHeadingListStart
    ${cvData.education_and_certificates.map((edu: any) => `
      \\resumeSubheading
        {${edu.url ? `\\href{${edu.url}}{\\underline{\\textbf{${resolve(edu.credential)}}}}` : `${resolve(edu.credential)}`}}{${resolve(edu.date)}}
        {${resolve(edu.institution)}}{${resolve(edu.location)}}
      \\vspace{6pt}
    `).join('\n')}
    \\resumeSubHeadingListEnd
  
  \\section{Technical Skills}
   \\begin{itemize}[leftmargin=0.15in, label={}]
      \\small{\\item{
       \\textbf{Languages}{: ${resolve(cvData.skills.languages)}} \\\\
       \\textbf{Frameworks/Libraries}{: ${resolve(cvData.skills.frameworks_libraries)}} \\\\
       \\textbf{Infrastructure}{: ${resolve(cvData.skills.infrastructure)}} \\\\
      }}
   \\end{itemize}
  
  \\end{document}`;
  }