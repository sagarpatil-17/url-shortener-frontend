import { Component, inject, signal, } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UrlService } from '../../core/services/url.service';
import { ShortUrlData } from '../../core/models/url.model';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-home',
  templateUrl: './home.html',
})
export class Home {

  private urlService = inject(UrlService);

  originalUrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.pattern(/^https?:\/\/[^\s/$.?#].[^\s]*$/i),
    ],
  });

  isLoading = signal(false);
  errorMessage = signal('');
  shortUrlResult = signal<ShortUrlData | null>(null);
  copied = signal(false);

  shortenUrl() {
    if (this.originalUrl.invalid) {
      this.originalUrl.markAllAsTouched();
      return
    }

    console.log(this.originalUrl.value)

    const originalUrl = this.originalUrl.value.trim();
    this.isLoading.set(true);

    this.urlService.createShortUrl({ originalUrl }).pipe(
      finalize(() => this.isLoading.set(false))
    ).subscribe({
      next: (response) => {
        this.shortUrlResult.set(response.data)
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage.set(
          err.error?.message || 'Something went wrong. Please try again.'
        )
      }
    })
  }

  async copyShortUrl() {
    const shortUrl = this.shortUrlResult()?.shortUrl;

    if (!shortUrl) return;

    try {
      await navigator.clipboard.writeText(shortUrl);
      this.copied.set(true);

      setTimeout(() => {
        this.copied.set(false);
      }, 2000)
    } catch (error) {
      this.errorMessage.set(
        'Unable to copy the link. Please copy it manually.'
      )
    }
  }

  resetForm() {
    this.originalUrl.reset();
    this.shortUrlResult.set(null);
    this.copied.set(false);
    this.errorMessage.set('');
  }
}
