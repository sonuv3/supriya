import React from 'react'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='main'>
        <div className='main-wrapper'>
        <h3 className='Normal-text text'>
            INTRODUCTION
        </h3 >
            <p className='para text'>In the conference today, Supriya  IT Solutions <span className='Intro'>CEO Sumit Kumar</span>  introduced a new supriya technologies application he said would  <span className='Intro'>"revolutionize"</span> the way people would prepare for tests like <span className='Intro'>GRE,</span> <span className='Intro'>GMAT and SAT</span></p>
            <p className='para'>Larn, as the new app is called, allows its users to prepare for various English efficiency tests on the go. Elaborating more on the name chosen for the app, he said larn basically means gaining knowledge or skills and that is what users of this application will be able to do: learn English. Varun Kumar said that they were going ahead with the release of version1.0 which essentially tests the users’ vocabulary knowledge.</p>
            <p className='para'>He also added, “With almost 25,000 unique words taken from different word lists such as Brown Corpus, Cbse and SAT, users will be more than prepared when they take their test”. He went on to clarify the future release dates of Larn saying that version 1.1 would come with sentence completion and version 1.2 would come with essay evaluation with free upgrades. According to Kumar, the release date for Larn(v1.1) is not too far.</p>
            <p className='para'>As his presentation wound down, Kumar said there was "one more thing" he wanted to mention: O3apps has started working on a unique mobile application which would use various features of android based devices to make life of its users easy, secure and fun. Incidentally, all the three words ‘easy, secure and fun’ were equally stressed, leaving everyone around guessing what that new application would be.</p>
            <button className='EXPLORE'>EXPLORE MORE!</button>
        </div>
    </div>
  )
}

export default HomePage
