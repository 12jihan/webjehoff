import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloggingService } from 'src/app/core/services/blogging-service/blogging.service';
import { BlogPreviewModel } from 'src/app/core/models/BlogPreviewModel';
import { SharedModule } from 'src/app/shared/shared.module';
import { faShare, faHeart, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@Component({
  selector: 'jeh-blogging',
  standalone: true,
  imports: [CommonModule, SharedModule, FontAwesomeModule],
  templateUrl: './blogging.component.html',
  styleUrl: './blogging.component.scss'
})
export class BloggingComponent implements OnInit {

  faShare = faShare;
  faHeart = faHeart;
  faGlobe = faGlobe;

  mockBlogPreview: BlogPreviewModel[] = [
    {
      title: "###This is a stitch This is a stitch This is a",
      body: `
      My blogging page is more than just a standard blog; it's a custom-engineered platform designed to offer a distinctive and engaging experience for my audience. I've focused on creating an intuitive and interactive environment for both content creators and readers. Excitingly, I'm on the brink of launching a community feature, which will open up new opportunities for connection and collaboration within my growing community. Also, a bit of a cheeky way to show off my skills.
      `
    },
    {
      title: "This is a stitch",
      body: "My blogging page is more than just a standard blog; it's a custom-engineered platform designed to offer a distinctive and engaging experience for my audience. I've focused on creating an intuitive and interactive environment for both content creators and readers. Excitingly, I'm on the brink of launching a community feature, which will open up new opportunities for connection and collaboration within my growing community. Also, a bit of a cheeky way to show off my skills."
    },
    {
      title: "This is a stitch",
      body: "My blogging page is more than just a standard blog; it's a custom-engineered platform designed to offer a distinctive and engaging experience for my audience. I've focused on creating an intuitive and interactive environment for both content creators and readers. Excitingly, I'm on the brink of launching a community feature, which will open up new opportunities for connection and collaboration within my growing community. Also, a bit of a cheeky way to show off my skills."
    },
    {
      title: "This is a stitch",
      body: "My blogging page is more than just a standard blog; it's a custom-engineered platform designed to offer a distinctive and engaging experience for my audience. I've focused on creating an intuitive and interactive environment for both content creators and readers. Excitingly, I'm on the brink of launching a community feature, which will open up new opportunities for connection and collaboration within my growing community. Also, a bit of a cheeky way to show off my skills."
    },
  ];

  constructor(private blog: BloggingService) {

  }

  ngOnInit(): void {

  }
}
