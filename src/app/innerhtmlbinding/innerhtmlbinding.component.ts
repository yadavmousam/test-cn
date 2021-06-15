import {AfterViewInit, Component, ElementRef,
  Renderer2} from '@angular/core';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
@Component({
  selector: 'app-innerhtmlbinding',
  templateUrl: './innerhtmlbinding.component.html',
  styleUrls: ['./innerhtmlbinding.component.css']
})
export class InnerhtmlbindingComponent implements AfterViewInit  {
  public basicUrl = 'javascript:alert("HACKED!!!")';
  public theoreticallySafeUrl: SafeUrl;
  private get host(): HTMLElement {
    return this.el.nativeElement;
  }
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>'
  constructor(private sanitizer: DomSanitizer, private renderer: Renderer2,
    private el: ElementRef) {}

 
 // For example, a user/attacker-controlled value from a URL.
 

 ngAfterViewInit(): void {
  this.setTheoreticallySafeUrl();
//   this.setUrlUsingRenderer();
 }


 public setTheoreticallySafeUrl(): void {
  this.theoreticallySafeUrl = this.sanitizer.bypassSecurityTrustUrl(
    this.basicUrl
  );
}

// private setUrlUsingRenderer(): void {
//   const link = this.getLink(".link-renderer");

//   this.renderer.setAttribute(link, "href", this.basicUrl);
// }

// private getLink(selector: string): HTMLAnchorElement {
//   return this.host.querySelector(selector);
// }

}




